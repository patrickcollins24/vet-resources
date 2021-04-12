import 'bulma/css/bulma.css';
import { Card,  CardHeader,  CardHeaderTitle, CardImage, Image, CardContent, Content } from 'bloomer';
import { Column, Notification, Columns } from 'bloomer';
import { Box, Title,Table } from 'bloomer';
import { Tile } from 'bloomer/lib/grid/Tile';



const VeteranPage = () => {
  return (
    <div>
      <Card>
        <h1 class="title is-1">Veteran Info</h1>
        <CardImage>
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlHHnnqvkCD4CeF1PbfPsJc-Qpdex9TOfYw&usqp=CAU"
            />
          </figure>
        </CardImage>
      </Card>
      <Columns isCentered isMultiline="true" isGrid="true">
        <Column isSize={{ mobile: 8 }}>
          <Notification isColor="warning" hasTextAlign="centered">
            Appointment List
            <Box>
              <Content>
                <h1>Veterans List</h1>
                <p>A table wll go here</p>
              </Content>
            </Box>
          </Notification>
        </Column>
        <Column isSize={{ mobile: 8 }}>
          <Notification isColor="warning" hasTextAlign="centered">
            Event List
          </Notification>
          <Table isBordered isStriped isNarrow>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Decision</th>
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
                <td>04/25/2021</td>
                <td>10:00:00</td>
                <td>
                  Toyota Field <br />
                  4555 Nestle Rd
                  <br />
                  Madison,AL 45669
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
                <td>Stand Down</td>
                <td>
                  Outreach event where Veterans receive referrals for health
                  care, housing solutions,employment, substance use treatment,
                  mental health counseling and other essential services.
                </td>
                <td>04/25/2021</td>
                <td>10:00:00</td>
                <td>1</td>
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
            </tbody>
          </Table>
        </Column>
        <Column isSize={{ mobile: 8 }}>
          <Notification isColor="warning" hasTextAlign="centered">
            Appointment List
          </Notification>
        </Column>
      </Columns>
      <h3>Veteran</h3>
      <a href="" target="_blank">
        <button> Veteran Name </button>
      </a>{" "}
      <br />
      <a href="" target="_blank">
        <button> Appointments </button>
      </a>{" "}
      <br />
      <a href="" target="_blank">
        <button> Events </button>
      </a>{" "}
      <br />
    </div>
  );
};

export default VeteranPage;
