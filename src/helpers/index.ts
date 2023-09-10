// Email Validation
export const isEmailValid = (email: string): boolean => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Link Validation
export const isUrlValid = (urlPlaceHolder: string, link: string): boolean => {
  const pattern = new RegExp(
    `^${urlPlaceHolder?.replace("/username", "").replace(/\//g, "\\/")}\/[^*]`
  );
  const cleanLinkPattern = new RegExp(
    `^${urlPlaceHolder
      ?.replace("/username", "")
      .replace("https://www.", "")
      .replace(/\//g, "\\/")}\/[^*]`
  );
  const noWwwPattern = new RegExp(
    `^${urlPlaceHolder
      ?.replace("/username", "")
      .replace("www.", "")
      .replace(/\//g, "\\/")}\/[^*]`
  );

  const isValidLink =
    pattern.test(link) ||
    cleanLinkPattern.test(link) ||
    noWwwPattern.test(link);

  return isValidLink;
};
