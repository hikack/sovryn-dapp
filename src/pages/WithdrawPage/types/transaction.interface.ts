export interface Transaction {
  activeAsset: string;
  from: string;
  to: string;
  value: number;
  fee: number;
}
