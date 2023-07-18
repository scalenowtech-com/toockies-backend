module.exports = {
  apps: [
    {
      name: "toockies-backend",
      script: "./dist/server.js",
      instances: 1,
      watch: ["dist"],
      max_restarts: 3,
      append_env_to_name: true,
    },
  ],
};
