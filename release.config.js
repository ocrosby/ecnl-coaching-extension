module.exports = {
    branches: ["main"],
    repositoryUrl: "https://github.com/ocrosby/lambda-kit",
    upload_to_pyPI: true,
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/github",
            {
                assets: [
                    { path: "dist/*.tar.gz", label: "Source Tarballs" },
                    { path: "dist/*.whl", label: "Wheels" }
                ]
            }
        ],
        [
            "@semantic-release/exec",
            {
                prepareCmd: "node updateVersion.js ${nextRelease.version}",
                successCmd: "echo 'Successfully released ${nextRelease.version}'",
                publishCmd: "echo 'version_changed=true' >> $GITHUB_OUTPUT"
            }
        ],
        [
            "@semantic-release/git",
            {
                assets: [
                    "CHANGELOG.md",
                    "VERSION",
                    "package.json"
                ],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
    ],
    tagFormat: "v${version}",
    preset: "angular",
    releaseRules: [
        { type: "feat", release: "minor" },
        { type: "fix", release: "patch" },
        { type: "perf", release: "patch" },
        { type: "build", release: false },
        { type: "chore", release: false },
        { type: "ci", release: false },
        { type: "docs", release: false },
        { type: "style", release: false },
        { type: "refactor", release: false },
        { type: "test", release: false }
    ],
    changelogFile: "CHANGELOG.md",
    commitMessage: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
};