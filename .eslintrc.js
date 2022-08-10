module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"], 
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "no-unreachable": "off"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module"
  }
};
