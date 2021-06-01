const unit = 1_000_000_000_000_000_000;

export const weiToEthereum = (value: string) => parseInt(value) / unit;

export const ethereumToWei = (value: number) => value * unit;
