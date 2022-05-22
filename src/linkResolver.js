exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "song") {
    return `/song/${doc.uid}`;
  }

  if (doc.type === "lyrics") {
    return `lyrics/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};
