exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "song") {
    return `/category/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};
