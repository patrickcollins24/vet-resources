import { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import { FaAngleDown } from 'react-icons/fa'  ;
import { Card,  CardHeader,  CardHeaderTitle, CardContent, Content } from 'bloomer';
import { Dropdown,DropdownTrigger, Button, Icon, DropdownMenu,DropdownContent, DropdownItem, DropdownDivider } from 'bloomer';


const ProviderPage = ({ getAppointments }) => {
    const [getAppointments, setGetAppointments] = useState([])

    useEffect(() => {
        const getAppointmentsList = async () => {
            const appointmentListServer = await fetchAppointmentList()
            setGetAppointments(appointmentListServer)
        }

        getAppointmentsList()
    }, [])

    const fetchAppointmentList = async () => {
        const res = await fetch('http://localhost:3003/appointments')
        const data = await res.json()

        return data
    }

    
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardHeaderTitle isSize={1} hasTextColor='danger' >
                        Provider
                    </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                    <Content>
                        
                    <Dropdown isHoverable={true} >
                        <DropdownTrigger>
                            <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Dropdown Button</span>
                                <Icon ClassName="FaAngleDown" isSize="small" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownContent>
                                <DropdownItem href="#">Veteran List</DropdownItem>
                                <DropdownItem href="#" >Add Appointment</DropdownItem>
                                <DropdownItem href="#">Add Event</DropdownItem>
                            </DropdownContent>
                        </DropdownMenu>
                    </Dropdown>
                    </Content>
                </CardContent>

            </Card>




            <a href="" target="_blank">
                <button> Provider Name </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Appointments </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Events </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Add Event </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Add an Appointment </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Cancel appointment </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Resource Page </button>
            </a> <br/>       
        </div>
    )
}

export default ProviderPage
