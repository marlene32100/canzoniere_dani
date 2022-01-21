exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "song") {
    return `/song/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};
