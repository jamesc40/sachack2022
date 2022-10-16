import React,{useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImageUploading from 'react-images-uploading'
import "./MissingPersonForm.css"

const MissingPersonForm = () => {

    const [formData,setFormData] = useState({})
    const [errors,setErrors] = useState([])

    
    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    //image upload setup
    const maxNumber = 1;
    const [images, setImages] = useState([])
    function handleImageChange(imageList, addUpdateIndex){
        setImages(imageList)
        
        if(imageList[0]){
            setFormData({
                ...formData,
                "image": imageList[0].image
            })
        }else{
            setFormData({
                ...formData,
                "image": ""
            })
        }
    }

    //handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch("/missing_person_data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if(req.ok){
            setErrors(['Thanks for successfully submitting!'])
            let res = req.json()
            console.log(res)
            // history.push('/')
        }else{
            let res = await req.json()
            let err_array = []

            for(let i in res.errors) {
                let message = `${i}: ${res.errors[i]}`
                err_array.push(message)
            }
            setErrors(err_array)
        }
    }
    console.log(errors)
    console.log(formData)

    return (
        <Form id="missing-person-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Full Name" onChange={handleInputChange}/>  
            </Form.Group>
            <Form.Group className="mb-3" id="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name="age" placeholder="Enter Age" onChange={handleInputChange}/>  
            </Form.Group>
            <Form.Group className="mb-3" id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select name="gender" onChange={handleInputChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Not Declared">Not Declared</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" id="eyeColor">
                <Form.Label>Eye Color</Form.Label>
                <Form.Select name="eyeColor" onChange={handleInputChange}>
                    <option value="">Select Eye Color</option>
                    <option value="Brown">Brown</option>
                    <option value="Hazel">Hazel</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Gray">Gray</option>
                    <option value="Amber">Amber</option>
                    <option value="Red">Red</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" id="hairColor">
                <Form.Label>Hair Color</Form.Label>
                <Form.Select name="hairColor" onChange={handleInputChange}>
                    <option value="">Select Hair Color</option>
                    <option value="Blonde">Blonde</option>
                    <option value="Red">Red</option>
                    <option value="Light Brown">Light Brown</option>
                    <option value="Black">Black</option>
                    <option value="Gray">Gray</option>
                    <option value="Ginger">Ginger</option>
                    <option value="White">White</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" id="height">
                <Form.Label>Height</Form.Label>
                <Form.Control type="text" name="height" placeholder="Enter Height" onChange={handleInputChange}/>  
            </Form.Group>
            <Form.Group className="mb-3" id="weight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" name="weight" placeholder="Enter Weight" onChange={handleInputChange}/>  
            </Form.Group>
            <Form.Group className="mb-3" id="ethnicity">
                <Form.Label>Ethnicity</Form.Label>
                <Form.Select name="ethnicity" onChange={handleInputChange}>
                    <option value="">Select Ethnicity</option>
                    <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                    <option value="Asian">Asian</option>
                    <option value="Black or African American">Black or African American</option>
                    <option value="Hispanic or Latino">Hispanic or Latino</option>
                    <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" placeholder="Enter Description" onChange={handleInputChange}/>  
            </Form.Group>
            <ImageUploading
                multiple="false"
                name="image"
                value={images}
                onChange={handleImageChange}
                maxNumber={maxNumber}
                dataURLKey="image"
                acceptType={["jpg"]}
            >
                {({
                imageList,onImageUpload,onImageRemoveAll,onImageUpdate,onImageRemove,
                isDragging,
                dragProps
                }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <Button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                        variant = "light"
                        >
                        Click or Drop here
                    </Button>
                    &nbsp;
                    <Button variant = "light" onClick={onImageRemoveAll}>Remove Image</Button>
                    {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.image} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                            <Button variant = "light" onClick={() => onImageUpdate(index)}>Update</Button>
                            <Button variant = "light" onClick={() => onImageRemove(index)}>Remove</Button>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </ImageUploading>
            <Button id="submit" type="submit">Submit</Button>
        </Form>
    )
}

export default MissingPersonForm