import girlImage from '../../images/postPosters/girl.webp';
import guysImage from '../../images/postPosters/guys.webp';

export const postItemsList = [
  {
    id: 1,
    type: "post",
    authorId: 1,
    text: "I want to play MW with others on the platform but hardly anyone here is online. It's such a pain in the butt ;(",
    selectedGameId: 1,
    isPublic: true,
    time: 1667997817,
    imgFile: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    likesUserId: [5, 12, 3, 8, 1],
    kidsId: [3, 4, 5],
  },
  {
    id: 2,
    type: "post",
    authorId: 1,
    text: "I want to play MW with others on the platform but hardly anyone here is online. It's such a pain in the butt ;(",
    selectedGameId: 3,
    isPublic: false,
    time: 1667997309,
    imgFile: "https://images.unsplash.com/photo-1523843268911-45a882919fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxnYW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    likesUserId: [],
    kidsId: [],
  },
  {
    id: 3,
    type: "comment",
    authorId: 3,
    text: "Sounds kinda simpish tho my man. So looks like PSN simp-o-meter is going off to your posts cause 9/10 girls on here are looking to bag few simps daily. #justfax",
    time: 1667998090,
    parentId: 1,
    kidsId: [5],
    likesUserId: [],
  },
  {
    id: 4,
    type: "comment",
    authorId: 7,
    text: "Sounds kinda simpish tho my man. So looks like PSN simp-o-meter is going off to your posts cause 9/10 girls on here are looking to bag few simps daily. #justfax",
    time: 1667998199,
    parentId: 1,
    kidsId: [],
    likesUserId: [],
  },
  {
    id: 5,
    type: "comment",
    authorId: 5,
    text: "Nvm ps5 I have a GTA5 legacy to continue",
    time: 1667998180,
    parentId: 3,
    kidsId: [],
    likesUserId: [8, 19, 1],
  }
];