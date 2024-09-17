import styled from "styled-components";
import {Props} from '.'

const ParagraphStyle = styled.p<Props>`
      font-size: ${({ size }) => (size === 'ParagraphPrincipal' ? '18px' : '14px')};
      color: ${({ color }) => (color === 'WhiteTitle' ? '#fffffe' : '#a7a9be')};
      margin-bottom:10px;
`

export default ParagraphStyle