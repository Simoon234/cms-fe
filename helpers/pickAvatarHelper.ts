interface Avatars {
    id: number;
    avatar: string;
    width: number;
    height: number;
    checked: boolean;
}

export const avatars: Avatars[] = [
    {
        id: 1,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa743gMgAQiEJZsTrjoLGS0Qgghopq7B2I6FYpewgRYhNzzAEiRVolY2GXZfB0ZvKUN-s&usqp=CAU',
        width: 75,
        height: 75,
        checked: false,
    },
    {
        id: 2,
        avatar: "https://www.seekpng.com/png/detail/72-729869_circled-user-female-skin-type-4-icon-profile.png",
        width: 75,
        height: 75,
        checked: false,
    },
    {
        id: 3,
        avatar: 'https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg',
        width: 75,
        height: 75,
        checked: false,
    },
    {
        id: 4,
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        width: 75,
        height: 75,
        checked: false,
    }
];
export const pickAvatarHelper = (id: number) => {
    const findClickedElements = avatars.find(item => item.id === id);
    return findClickedElements && findClickedElements.avatar;
}