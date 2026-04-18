export interface Player {
  id: string;
  name: string;
  role: string;
  tier: 'S' | 'A' | 'B';
  pfp: string;
  notes: string;
  status: 'available' | 'sold' | 'unsold';
  soldTo: string | null;
  soldFor: number;
}

export interface House {
  id: string;
  name: string;
  baron: string;
  color: string;
  budget: number;
  spent: number;
}

export interface Config {
  budget: number;
  rosterSize: number;
  increment: number;
  timer: number;
  tierPrice: { S: number; A: number; B: number };
}

export interface AuctionLog {
  type: 'sold' | 'bid' | 'system';
  msg: string;
  time: string;
}

export interface AppState {
  config: Config;
  players: Player[];
  houses: House[];
  auctionStarted: boolean;
  currentPlayer: Player | null;
  queue: Player[];
  currentBid: number;
  currentBidder: House | null;
  log: AuctionLog[];
  isPaused: boolean;
}
