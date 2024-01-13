import React from "react";

export const Validation = (email, password) => {
    // const vaildName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  const vailEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const vaildPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!vailEmail) return "Enter Vaild Email";
  if (!vaildPass) return "Enter Vaild Password";
  return null;
};
