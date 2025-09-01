"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  GitBranch,
  Settings,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Copy,
  Terminal,
  Globe,
  Zap,
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import { useState } from "react";

export default function DeploymentGuide() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const projects = [
    { name: "Myntra", type: "React", status: "ready" },
    { name: "Amazon", type: "React", status: "ready" },
    { name: "Kanban_WorkBoard", type: "React", status: "ready" },
    { name: "Bharat-Clock", type: "Vanilla JS", status: "ready" },
    { name: "Calculator", type: "Vanilla JS", status: "ready" },
    { name: "Elante_Mall", type: "React", status: "ready" },
    { name: "Skill_Up", type: "React", status: "ready" },
    { name: "Portfolio", type: "React", status: "deployed" },
  ];

  const deploymentSteps = [
    {
      title: "Prepare Your Repository",
      icon: <GitBranch className="w-6 h-6" />,
      steps: [
        "Ensure your project builds successfully locally",
        "Commit and push all changes to GitHub",
        "Make sure your main branch is up to date",
      ],
    },
    {
      title: "Configure Package.json",
      icon: <Settings className="w-6 h-6" />,
      steps: [
        "Add homepage URL to package.json",
        "Install gh-pages as dev dependency",
        "Add deployment scripts",
      ],
    },
    {
      title: "Deploy to GitHub Pages",
      icon: <Rocket className="w-6 h-6" />,
      steps: [
        "Run the deployment command",
        "Enable GitHub Pages in repository settings",
        "Wait for deployment to complete",
      ],
    },
    {
      title: "Verify Deployment",
      icon: <CheckCircle className="w-6 h-6" />,
      steps: [
        "Check the live URL",
        "Test all functionality",
        "Update portfolio with live links",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Project Deployment Guide
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete step-by-step guide to deploy all your projects to GitHub
            Pages and make them live for the world to see.
          </p>
        </motion.div>

        {/* Project Status Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Globe className="mr-3 text-blue-400" />
            Your Projects Status
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">{project.name}</h3>
                  {project.status === "deployed" ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-2">{project.type}</p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "deployed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {project.status === "deployed" ? "Live" : "Ready to Deploy"}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Deployment Steps */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Zap className="mr-3 text-purple-400" />
            Deployment Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">{step.icon}</div>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <ul className="space-y-2">
                  {step.steps.map((stepItem, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="text-sm text-gray-400 flex items-start"
                    >
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      {stepItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Instructions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Terminal className="mr-3 text-green-400" />
            Step-by-Step Instructions
          </h2>

          {/* For React Projects */}
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaReact className="mr-3 text-blue-400" />
              For React Projects (Myntra, Amazon, Kanban_WorkBoard, etc.)
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  1. Install gh-pages
                </h4>
                <div className="bg-gray-900 p-4 rounded-lg relative">
                  <code className="text-green-400">
                    npm install --save-dev gh-pages
                  </code>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "npm install --save-dev gh-pages",
                        "install"
                      )
                    }
                    className="absolute right-2 top-2 p-2 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === "install" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  2. Update package.json
                </h4>
                <p className="text-gray-400 mb-3">
                  Add these lines to your package.json:
                </p>
                <div className="bg-gray-900 p-4 rounded-lg relative">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {`{
  "homepage": "https://Abhishek6827.github.io/[REPOSITORY-NAME]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `{
  "homepage": "https://Abhishek6827.github.io/[REPOSITORY-NAME]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}`,
                        "package"
                      )
                    }
                    className="absolute right-2 top-2 p-2 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === "package" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="text-yellow-400 text-sm mt-2">
                  Replace [REPOSITORY-NAME] with your actual repository name
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  3. Deploy
                </h4>
                <div className="bg-gray-900 p-4 rounded-lg relative">
                  <code className="text-green-400">npm run deploy</code>
                  <button
                    onClick={() => copyToClipboard("npm run deploy", "deploy")}
                    className="absolute right-2 top-2 p-2 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === "deploy" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For Vanilla JS Projects */}
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Terminal className="mr-3 text-yellow-400" />
              For Vanilla JS Projects (Calculator, Bharat-Clock)
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">
                  1. Enable GitHub Pages
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Go to your repository on GitHub</li>
                  <li>• Click on Settings tab</li>
                  <li>• Scroll down to Pages section</li>
                  <li>• Select "Deploy from a branch"</li>
                  <li>• Choose "main" branch and "/ (root)" folder</li>
                  <li>• Click Save</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                <p className="text-blue-400 text-sm">
                  Your project will be available at:
                  https://Abhishek6827.github.io/[REPOSITORY-NAME]
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project-Specific URLs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <ExternalLink className="mr-3 text-cyan-400" />
            Your Project URLs
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.name !== "Portfolio")
              .map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-gray-400">
                      https://Abhishek6827.github.io/{project.name}/
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `https://Abhishek6827.github.io/${project.name}/`,
                        project.name
                      )
                    }
                    className="p-2 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === project.name ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </motion.div>
              ))}
          </div>
        </motion.section>

        {/* Troubleshooting */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <AlertCircle className="mr-3 text-red-400" />
            Troubleshooting
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-400">
                  Common Issues & Solutions
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <strong className="text-white">404 Error:</strong> Make sure
                    the homepage URL in package.json matches your repository
                    name exactly
                  </li>
                  <li>
                    <strong className="text-white">Build Fails:</strong> Check
                    that your project builds locally with `npm run build`
                  </li>
                  <li>
                    <strong className="text-white">Blank Page:</strong> For
                    React apps, ensure you're using HashRouter or configure
                    routing properly
                  </li>
                  <li>
                    <strong className="text-white">Assets Not Loading:</strong>{" "}
                    Use relative paths for images and assets
                  </li>
                  <li>
                    <strong className="text-white">Deployment Stuck:</strong>{" "}
                    Delete node_modules, run `npm install`, then try deploying
                    again
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <p className="text-yellow-400 text-sm">
                  <strong>Pro Tip:</strong> It may take a few minutes for
                  changes to appear on GitHub Pages. Be patient and clear your
                  browser cache if needed.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
