import styled from '@emotion/styled'
import { Media } from '@razrabs-ui/responsive'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    .title {
      color: ${({ theme }) => theme.colors.brand};
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  ${Media.mobile} {
    & > * {
      margin-bottom: 6px !important;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ChiefBadgeWrapper = styled.div`
  margin-right: 20px;
`

export const AdditionalInfoWrapper = styled.div`
  margin-left: auto;
`
