import { Region, PointsRule } from './types';

export const INITIAL_REGIONS: Region[] = [
  { id: 'empire', name: 'Empire', occupancy: 9173, points: 18500, continent: 'North America', locations: ['New York City', 'New Jersey'] },
  { id: 'atlantic', name: 'Atlantic', occupancy: 7475, points: 14200, continent: 'North America', locations: ['Boston', 'Philadelphia', 'D.C.', 'Maryland', 'Virginia', 'Connecticut'] },
  { id: 'sunbelt', name: 'Sunbelt', occupancy: 9427, points: 19100, continent: 'North America', locations: ['Carolinas', 'Atlanta', 'Florida', 'Nashville'] },
  { id: 'frontier', name: 'Frontier', occupancy: 6092, points: 12400, continent: 'North America', locations: ['Colorado', 'Texas', 'Phoenix', 'Kansas City'] },
  { id: 'pacific', name: 'Pacific', occupancy: 8589, points: 15800, continent: 'North America', locations: ['California', 'Portland', 'Seattle'] },
  { id: 'great-lakes', name: 'Great Lakes', occupancy: 5688, points: 10200, continent: 'North America', locations: ['Chicago', 'Pittsburgh', 'Indianapolis', 'Minneapolis', 'Toronto'] },
  { id: 'europe', name: 'Europe', occupancy: 4751, points: 9800, continent: 'Europe', locations: ['United Kingdom', 'Europe'] },
];

export const POINTS_RULES: PointsRule[] = [
  { name: 'Home Turf booking', description: 'Meeting Room reservation within your home location', points: 25, tier: 1 },
  { name: 'Away-Game booking', description: 'Meeting Room reservation within your region', points: 30, tier: 1 },
  { name: 'World Tour booking', description: 'Meeting Room reservation in a different region', points: 50, tier: 1 },
  { name: 'Away-Game Day Pass', description: 'Visiting locations within your region', points: 50, tier: 1 },
  { name: 'World Tour Day Pass', description: 'Visiting locations in a different region', points: 100, tier: 1 },
  { name: 'App Login', description: 'Engagement through the Industrious app', points: 5, tier: 2 },
  { name: 'Visit home location', description: 'Showing up to your primary workspace', points: 10, tier: 2 },
  { name: 'Download app', description: 'One-time bonus for joining the digital ecosystem', points: 250, tier: 2 },
  { name: 'Event Attendance', description: 'Participating in on-site community events', points: 15, tier: 2 },
];

export const CALC_NORMALIZED = (points: number, occupancy: number) => {
  return Number((points / occupancy).toFixed(2));
};
