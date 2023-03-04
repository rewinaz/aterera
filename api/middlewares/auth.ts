const auth = function (req: any, res: any, next: any) {
  console.log("Signing in user");

  req.user = { userName: "rewina" };
  next();
};

module.exports = auth;
