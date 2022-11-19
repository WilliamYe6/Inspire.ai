import React from 'react'
import styled from 'styled-components'

/**

div upload page 
    div title=select output
    grid repeat(3, 1fr);
    div bottom
        input uploadButton
        refresh button
  
 */

const Upload = () => {
    return (
      <UploadContainer>
        <UploadTitle>
            Select an output:
        </UploadTitle>
        <GridContainer>
            <Grid>
                Grid 1
            </Grid>
            <Grid>
                Grid 2
            </Grid>
            <Grid>
                Grid 3
            </Grid>
        </GridContainer>

      </UploadContainer>
    )
  }

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const UploadTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px 36px;
`

const Grid = styled.div`
    width: 100%;
    margin: 0 24px;
    border: solid 1px red;
`

export default Upload