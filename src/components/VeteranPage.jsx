import 'bulma/css/bulma.css';
import { Card,  CardHeader,  CardHeaderTitle, CardImage, Image, CardContent, Content } from 'bloomer';
import { Dropdown,DropdownTrigger, Button, Icon, DropdownMenu,DropdownContent, DropdownItem, DropdownDivider } from 'bloomer';
import { CardHeaderIcon } from 'bloomer/lib/components/Card/Header/CardHeaderIcon';




const VeteranPage = () => {
    return (
        <div>
                        <Card>
                            <h1 class="title is-1">Veteran Info</h1>
                <CardHeader>
                    <CardHeaderTitle isAlign='centered' hasTextColor='danger' >
                        Veteran
                    </CardHeaderTitle>
                    <CardHeaderIcon>
                    <Icon class="fa fa-angle-down" isSize="small" />
                    </CardHeaderIcon>
                </CardHeader>
                <CardImage>
                <figure class="image is-128x128">
                    <img class="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlHHnnqvkCD4CeF1PbfPsJc-Qpdex9TOfYw&usqp=CAU" />
                    </figure>
                </CardImage>
                <CardContent>
                    <Content>
                    
                    </Content>
                </CardContent>

            </Card>








            <h3>Veteran</h3>
            <a href="" target="_blank">
                <button> Veteran Name </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Appointments </button>
            </a> <br/>
            <a href="" target="_blank">
                <button> Events </button>
            </a> <br/>
        </div>
    )
}

export default VeteranPage;
