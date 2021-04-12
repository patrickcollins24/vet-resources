
import 'bulma/css/bulma.css';
import { FaAngleDown } from 'react-icons/fa'  ;
import { Card,  CardHeader,  CardHeaderTitle, CardContent, Content } from 'bloomer';
import { Box, Table } from 'bloomer';
import { Modal, ModalCardBody, ModalCardTitle, ModalCard, ModalBackground, Button,ModalCardFooter, ModalCardHeader, Delete} from 'bloomer';



const ProviderPage = () => {

    
    return (
      <div>
        <h1>Provider Info</h1>
        <h3>Carter Rohn</h3>
        <Box>
          <Content>
            <h1>Veterans List</h1>
            <p>A table wll go here</p>
            <Table isBordered isStriped isNarrow>
              <thead>
                <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Decision</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Patrick Collins</td>
                  <td>
                  
                </td>
                  <td>
                  <div class="select is-normal">
                    <select>
                      <option>Please Choose</option>
                      <option>Accept</option>
                      <option>Decline</option>
                    </select>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>Patrick Collins</td>
                  <td>"2"</td>
                  <td>"0"</td>
                </tr>
                <tr>
                  <td>Patrick Collins</td>
                  <td>"2"</td>
                  <td>"0"</td>
                </tr>
                <tr>
                  <td>Patrick Collins</td>
                  <td>"2"</td>
                  <td>"0"</td>
                </tr>
              </tbody>
            </Table>
          </Content>
        </Box>
        <Box>
          <Content>
            <h1>Event List</h1>
            <p>No event list to show</p>
            <Table isBordered isStriped isNarrow>
              <thead>
                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stand Down</td>
                  <td>
                  Outreach event where Veterans receive referrals for health
                  care, housing solutions,employment, substance use treatment,
                  mental health counseling and other essential services.
                </td>
                  <td>"0"</td>
                  <td>"0"</td>
                  <td>"0"</td>
                  <td>
                  <div class="select is-normal">
                    <select>
                      <option>Please Choose</option>
                      <option>Accept</option>
                      <option>Decline</option>
                    </select>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>Patrick Collins</td>
                  <td>"2"</td>
                  <td>"0"</td>
                </tr>
                <tr>
                  <td>Patrick Collins</td>
                  <td>"2"</td>
                  <td>"0"</td>
                </tr>
                <tr>
                  <td>Patrick Collins</td>
                  <td>"2"</td>
                  <td>"0"</td>
                </tr>
              </tbody>
            </Table>
          </Content>
        </Box>
      </div>
    );
}

export default ProviderPage
