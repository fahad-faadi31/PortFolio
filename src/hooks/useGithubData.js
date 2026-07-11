import { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig";

const username = siteConfig.social.github.split("/").filter(Boolean).pop();

/**
 * useGithubData — fetches live profile stats and recent repos from the
 * public GitHub REST API (no auth needed, generous rate limit for
 * unauthenticated client-side calls). Keeps the GitHub section honest
 * with real numbers instead of hardcoded placeholders.
 */
export default function useGithubData() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        if (!cancelled) {
          setProfile(profileData);
          setRepos(
            reposData
              .filter((r) => !r.fork)
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .slice(0, 4)
          );
          setStatus("success");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  return { profile, repos, status, username };
}
