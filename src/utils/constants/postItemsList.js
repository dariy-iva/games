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
    imgFile: girlImage,
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
    imgFile: guysImage,
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