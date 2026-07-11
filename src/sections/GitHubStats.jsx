import { motion } from "framer-motion";
import { FiStar, FiGitBranch, FiUsers, FiFolder, FiExternalLink } from "react-icons/fi";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { staggerContainer, staggerItem } from "../utils/motionVariants";
import useGithubData from "../hooks/useGithubData";

const statConfig = [
  { key: "public_repos", label: "Public Repos", icon: FiFolder },
  { key: "followers", label: "Followers", icon: FiUsers },
  { key: "following", label: "Following", icon: FiGitBranch },
];

export default function GitHubStats() {
  const { profile, repos, status, username } = useGithubData();

  return (
    <AnimatedSection id="github" className="container-custom py-24">
      <SectionHeading
        eyebrow="GitHub"
        title="Where the code lives"
        description="Live stats pulled straight from GitHub — the real, current state of my public work."
      />

      {status === "error" && (
        <Card hover={false} className="mb-10 text-center">
          <p className="text-text-secondary text-sm">
            Couldn't load live GitHub data right now. Check out the full
            profile directly on{" "}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/{username}
            </a>
            .
          </p>
        </Card>
      )}

      {/* Stat cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
      >
        {statConfig.map(({ key, label, icon: Icon }) => (
          <motion.div key={key} variants={staggerItem}>
            <Card className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent-soft border border-accent/30 flex items-center justify-center shrink-0">
                <Icon className="text-accent" size={20} />
              </div>
              <div>
                <p className="text-2xl font-semibold font-display text-text">
                  {status === "success" ? profile?.[key] ?? "—" : "—"}
                </p>
                <p className="text-xs text-text-secondary uppercase tracking-wide">
                  {label}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Contribution graph */}
      <Card hover={false} className="mb-10 overflow-x-auto">
        <p className="text-xs uppercase tracking-wide text-text-secondary mb-4">
          Contribution Activity
        </p>
        <img
          src={`https://ghchart.rshah.org/14B8A6/${username}`}
          alt={`${username}'s GitHub contribution graph`}
          className="w-full min-w-[600px]"
          loading="lazy"
        />
      </Card>

      {/* Repo cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 gap-4"
      >
        {status === "success" &&
          repos.map((repo) => (
            <motion.div key={repo.id} variants={staggerItem}>
              <Card className="h-full flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-semibold text-text font-display">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors shrink-0"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center gap-3">
                  {repo.language && <Badge>{repo.language}</Badge>}
                  <span className="flex items-center gap-1 text-xs text-text-secondary">
                    <FiStar size={13} /> {repo.stargazers_count}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}

        {status === "loading" &&
          Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} hover={false} className="h-36 animate-pulse">
              <div className="h-4 w-1/2 bg-surface-hover rounded mb-4" />
              <div className="h-3 w-full bg-surface-hover rounded mb-2" />
              <div className="h-3 w-2/3 bg-surface-hover rounded" />
            </Card>
          ))}
      </motion.div>
    </AnimatedSection>
  );
}
