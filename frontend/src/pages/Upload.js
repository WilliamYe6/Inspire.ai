import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Upload = () => {

    const [imageDescription, setImageDescription] = useState("");

    const [selectedImagesObj, setSelectedImagesObj] = useState({
        activeObj: null,
        objects: [{ id: 0 }, { id: 1 }, { id: 2 }]
    });

    const toggleSelectedImage = (index) => {
        setSelectedImagesObj({
            ...selectedImagesObj,
            activeObj: selectedImagesObj.objects[index]
        })
    }

    const toggleImageBorderStyle = (index) => {
        return (selectedImagesObj.activeObj === selectedImagesObj.objects[index]) ? 'grid with_border' : 'grid without_border';
    }

    const onChangeHandler = (desc) => {
        setImageDescription(desc);
    }

    const onUploadHandler = async () => {
        await fetch("http://localhost:5000/api/postDesign", {
            method: 'POST',
            body: JSON.stringify({
                name: imageDescription,
                url: sessionStorage.getItem("data").split(',')[selectedImagesObj.activeObj.id],
                color: sessionStorage.getItem("color"),
                theme: sessionStorage.getItem("theme"),
                subcategory: sessionStorage.getItem("subCategory"),
                category: 'web design'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("data: ", data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    return (
        <UploadContainer className='upload_container'>
            <UploadTitle className='upload_title'>
                Select an output:
            </UploadTitle>
            <GridContainer className='grid_container'>
                {
                    selectedImagesObj.objects.map((element, index) => (
                        <Grid key={index} className={toggleImageBorderStyle(index)} onClick={() => { toggleSelectedImage(index) }}>
                            <img src={sessionStorage.getItem('data').split(',')[index]} />
                        </Grid>
                    ))
                }
            </GridContainer>
            <SubmitContainer className='submit_container'>
                <Placeholder className='placeholder_invisible'>
                    Refresh
                </Placeholder>
                <UploadForm className='upload_form'>
                    <UploadInput className='upload_input' placeholder='e.g. green cat with hat' type='text' value={imageDescription} onChange={(e) => onChangeHandler(e.target.value)} />
                    <UploadButton className='upload_button' onClick={(e) => onUploadHandler() }>
                        Upload
                    </UploadButton>
                </UploadForm>
                <RefreshButton className='refresh_button' onSubmit={console.log("refreshed generated outputs")}>
                    Refresh
                </RefreshButton>
            </SubmitContainer>
        </UploadContainer>
    )
}

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 20px 36px;
    border: solid 1px black;
`

const UploadTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
`

const Grid = styled.div`
    width: 256px;
    height: 256px;
    margin: 0 24px;
    cursor: pointer;
    
    &.with_border {
        border: solid 2px red;
    }

    &.without_border {
        border: solid 1px black;
    }
`

const SubmitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
`

const UploadForm = styled.div`

`

const UploadInput = styled.input`
    width: 200px;
    margin-right: 8px;
`

const UploadButton = styled.button`

`

const RefreshButton = styled.button`
    margin-right: 24px;
`

const Placeholder = styled.button`
    visibility: hidden;
`

export default Upload