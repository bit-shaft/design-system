/* eslint-disable @typescript-eslint/no-explicit-any */

/**  */
import { HTMLAttributes } from 'react'
import { CSS } from '../styles/css'

/** types */
type DefaultProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  class?: string;
  style?: React.CSSProperties;
  children?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  css?: CSS & HTMLAttributes<HTMLElement>['css']
}

/** exports */
export type { DefaultProps }