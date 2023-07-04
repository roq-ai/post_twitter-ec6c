const mapping: Record<string, string> = {
  organizations: 'organization',
  tweets: 'tweet',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
