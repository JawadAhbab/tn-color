import { Color } from './colorx'

export class Contrast {
  private bgcolor: Color
  private fgcolor: Color
  private size: number
  private largeAA = 3
  private smallAA = 4.5
  private largeAAA = 4.5
  private smallAAA = 7
  constructor(bgcolor: string, fgcolor: string, size = 16) {
    this.bgcolor = Color(bgcolor)
    this.fgcolor = Color(fgcolor)
    this.size = size
  }

  private get large() {
    return this.size >= 18
  }

  public get contrast() {
    return this.bgcolor.contrast(this.fgcolor)
  }

  public get passAA() {
    const cutoff = this.large ? this.largeAA : this.smallAA
    return this.contrast >= cutoff
  }

  public get passAAA() {
    const cutoff = this.large ? this.largeAAA : this.smallAAA
    return this.contrast >= cutoff
  }
}
