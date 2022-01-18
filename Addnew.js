import React from 'react'
import './Addnew'
import { Form,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Addnew = () => {
    return (
        <div>
        <div className='row'>
                    <div className='col-md-8'><h4>Add New Members</h4></div>
                    <div className='col-md-4'><Button variant="primary" size="lg" >
      save
    </Button></div>
                    
                </div>
            <Form>
                <div className='row'>
                    <div className='col-md-2'><Form.Label>First Name</Form.Label></div>
                    <div className='col-md-4'><Form.Control type="text" placeholder="First Name"  /></div>
                    <div className='col-md-2'><Form.Label>Last Name</Form.Label></div>
                    <div className='col-md-4'><Form.Control type="text" placeholder="Last Name" /></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><Form.Label>E-Mail</Form.Label></div>
                    <div className='col-md-4' ><Form.Control type="text" placeholder="nomail@domain.com" /></div>
                    <div className='col-md-2'><Form.Label>Designation</Form.Label></div>
                    <div className='col-md-4'><Form.Control type="text" placeholder="Designation" /></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><Form.Label>Group</Form.Label></div>
                    <div className='col-md-4'><Form.Select >
                                            <option>Select Group</option>
                                            <option value="-NA-">-NA-</option>
                                            <option value="Group1">Group 1</option>
                                            <option value="Group2">Group 2</option>
                                            <option value="Group3">Group 3</option>
                                            <option value="Group4">Group 4</option>
                                            </Form.Select>
                    </div>
                    
                </div>
            </Form>
        </div>
    )
}

export default Addnew
