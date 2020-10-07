const USER_ID_1 = '2JK1AtV4nSTB48mm8aTQf42CoBf2';
const USER_ID_2 = '9IL4Qv1bxzLxxQixsj7qD6I8dx72';
const USER_ID_3 = 'qryzZmgITXeOMHXWTEGRAcElVGq1';

module.exports.users = [{
    id: USER_ID_1,
    email: 'brendabrown@gmail.com',
    fullName: 'Brenda Brown',
}, {
    id: USER_ID_2,
    email: 'jimsmith@gmail.com',
    fullName: 'Jim Smith',
}, {
    id: USER_ID_3,
    email: 'janejones@gmail.com',
    fullName: 'Jane Jones',
}];

module.exports.photos = [{
    url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Famericanhumane.org%2Fapp%2Fuploads%2F2016%2F08%2Fjohn-tecuceanu-1557217-unsplash.jpg&imgrefurl=https%3A%2F%2Fwww.americanhumane.org%2Ffact-sheet%2Fchoosing-a-cat-collar%2F&tbnid=HpRsqE54OTMEdM&vet=12ahUKEwiN2JPF-J3sAhVBVd8KHY5RD-IQMygAegQIARB6..i&docid=T1Ab0UZAQJxTXM&w=4800&h=3200&q=cat&ved=2ahUKEwiN2JPF-J3sAhVBVd8KHY5RD-IQMygAegQIARB6',
    title: 'My Cat',
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
}, {
    url: 'https://photo-sharing-key.s3-us-west-1.amazonaws.com/car-photo.jpg',
    title: 'My Car',
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
}];
