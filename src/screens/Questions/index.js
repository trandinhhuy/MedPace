import React from 'react';
import WhatIsYourBirthday from './WhatIsYourBirthday';
import WhatIsYourgender from './WhatIsYourGender';
import WhatIsYourHeight from './WhatIsYourHeight';

const Question = ({ navigation, route = { params: {} } }) => {
    const [questionId, setQuestionId] = React.useState(1);
    switch (questionId) {
        default:
        case 1:
            return <WhatIsYourgender navigation={navigation} route={route} onAction={() => setQuestionId(2)} />
        case 2:
            return <WhatIsYourBirthday navigation={navigation} route={route} onAction={() => setQuestionId(3)} />
        case 3:
            return <WhatIsYourHeight navigation={navigation} route={route} onAction={() => setQuestionId(4)} />
    }

}


export default Question;