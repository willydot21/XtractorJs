
export type VerifyOriginFn = (
  origin: string | undefined,
  callback: (err: Error | null, origin?: StaticOrigin | undefined) => void
) => void;