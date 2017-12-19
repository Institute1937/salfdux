const events =

 
   [{
      name: "Stalybridge",
    date: "23rd Dec",
    themanager: "Mildred Wythenshaw",
    address: "Bower Fold, Mottram Rd, Stalybridge SK15 2RT, UK",
    blurbOne: "There has been a ground at Bower Fold since 1906. The current main stand was built in 1996, with the covered stand at the Town End (Joe Jackson Stand) dating from 1994. The main stand, replaced a wooden one dating from 1909, which held 500 fans, before being converted to tip-up seating with a reduced capacity of around 400 persons.",
    blurbTwo: "The Lord Pendry Stand opened in 2004, replacing a covered terrace dating from the 1950s. The Mottram End cover stems from construction starting in the 1970s and finishing in the mid '80s. The main stand, holding about 700 people, is all seated. Its opposite stand, the Lord Pendry stand has 652 seats.",
    id:1,
    eventColourScheme:'event-colour-one',
   secondaryColourText: 'event-secondary-one'},

   {
      name: "Colne",
    date: "24th Dec",
    id:2,
    themanager: "Paul Haltwistle",
    address: "Holt House, Harrison Dr, Colne BB8 9SF, UK",
    blurbOne: "The club play at Holt House, which was previously the home ground of Colne Dynamoes.[5] The ground was originally an area with several pitches, before being enclosed in 1975 when Dynamoes joined the Lancashire Combination, although it continued to be used for cricket.[5] Between 1982 and 1985 three stands were erected and floodlights installed.",
    blurbOne: "Another new stand was built in 1986.[5] When Dynamoes folded, the ground was used by the Colne Royal British Legion football club until they folded in 1995, after which the modern Colne club became tenants when they formed the following year",
    eventColourScheme:'event-colour-two',
   secondaryColourText: 'event-secondary-two'},

      {
         name: "Bacup",
       date: "26th Dec",
       themanager: "Barry Bolton",
       id:3,
       eventColourScheme:'event-colour-three',
      secondaryColourText: 'event-secondary-three'},

      {
         name: "Brighouse",
       date: "29th Dec",
       themanager: "Emily Harrison",
       id:4,
       eventColourScheme:'event-colour-four',
      secondaryColourText: 'event-secondary-four'},   {
         name: "Tow Law",
       date: "30th Dec",
       themanager: "Rowan Hewitt",
       id:5,
       eventColourScheme:'event-colour-five',
      secondaryColourText: 'event-secondary-five'},
      ,  {
               name: "Glossop",
             date: "30th Dec",
             themanager: "Donal Stewart",
             id:6,
             eventColourScheme:'event-colour-six',
            secondaryColourText: 'event-secondary-six'},
            ,  {
                     name: "Morecambe",
                   date: "31st Dec",
                   themanager: "Larry Conrad",
                   id:7,
                   eventColourScheme:'event-colour-five',
                  secondaryColourText: 'event-secondary-five'}]

export default (state = events, action) => {
  switch (action.type) {
    case 'GET_EVENTS_SUCCESS':
      return action.events;
    default:
      return state;
  }
}