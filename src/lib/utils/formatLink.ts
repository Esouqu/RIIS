export default function formatLink(linkName: string) {
  return linkName.toLowerCase().replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s/g, '_');
}