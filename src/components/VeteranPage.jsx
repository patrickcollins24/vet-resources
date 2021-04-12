import 'bulma/css/bulma.css';
import { Card,  CardHeader,  CardHeaderTitle, CardImage, Image, CardContent, Content } from 'bloomer';
import { Column, Notification, Columns } from 'bloomer';
import { Box, Title,Table, Delete } from 'bloomer';
import { Tile } from 'bloomer/lib/grid/Tile';



const VeteranPage = () => {
  return (
    <div>
      <Card>
        <h1 class="title is-1">JoJo Myles</h1>
        <CardImage>
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://lh3.googleusercontent.com/proxy/M9WHSl2TrqDjFra8smV_0HC_4IqKGmVpNt8LHxmPsydxxmwNYzoTrY2LcoYeuzQ_ynY9x0Kd5Ty3Jm0K6j7850HKybIEKaU5zopC6XRu0BF9klrULB3yRzKD4UFITgOLO6BNAuHxzAbOCAtm"
            />
          </figure>
        </CardImage>

      </Card>

        <Columns isCentered isGrid="true">
        <Column isSize={{ mobile: 8 }}>
          <Notification isColor="warning" hasTextAlign="centered">
            Appointment List
          </Notification>
          
          <ol>
              <li>Va Benefits<br/>04/24/2021<br/>09:00:00<br/>Va Regional Center,<br/>4545 Leave Me Way<br/>Columbia,Fl 34333<br/>
              <div class="buttons">
                  <button  class="button is-link is-light">Remind</button>
                  <button  class="button is-link is-light">Edit</button>
                  <button class="button is-danger is-light">Delete</button>
                </div></li>
              <hr></hr>
              <li>Medical Follow-up<br/>04/29/2021<br/>11:00:00<br/>Va Medical Center,<br/>908 Im Gone Dr.<br/>Columbia,Fl 34333</li><br />
              <div class="buttons">
                  <button  class="button is-link is-light">Remind</button>
                  <button  class="button is-link is-light">Edit</button>
                  <button class="button is-danger is-light">Delete</button>
                </div>
              <hr></hr>
              <li>Va Benefits<br/>05/22/2021<br/>08:00:00<br/>Va Regional Center,<br/>233 Here St<br/>Columbia,Fl 34333</li><br />
              <div class="buttons">
                  <button  class="button is-link is-light">Remind</button>
                  <button  class="button is-link is-light">Edit</button>
                  <button class="button is-danger is-light">Delete</button>
                </div>
          </ol>
        </Column>
        <br/>
    
        <div >
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




        </div>

        <Column isSize={{ mobile: 8 }}>
          <Notification isColor="warning" hasTextAlign="centered">
            Appointment List
          </Notification>
          <div className="container">
          <form className="form-control" >
                <h2>Appointment</h2>
                <br/>
                <h3>Add Appointment</h3>
                <div>
                <label htmlFor='title'>
                    Title
                </label>
                <input type='text'  
                name='title' 
                placeholder='enter appointment' 
                />
                </div>
                <div>
                <label htmlFor='date'>
                    Date
                </label>
                <input type='date' 
                name='date' 
                placeholder='enter date'
                />
                </div>
                <div>
                <label htmlFor='time'>
                    Time
                </label>
                <input type='text' 
                name='time'
                />
                </div>
                <div>
                    <label >
                        Reminder
                    </label>
                    <br/>
                    <select>
                        <option >text message</option>
                        <option >email</option>
                    </select>
                    </div>
                    <button className='btn' type='submit'>Add Appointment</button>
                    <div>
                        
                    </div>
            </form>



          </div>
        </Column>
      </Columns>
      <br />

      <h2>Provider Question</h2>
      <textarea class="textarea" placeholder="Enter Question"></textarea>
      <input class="button" type="submit"></input>

    </div>
  );
};

export default VeteranPage;
