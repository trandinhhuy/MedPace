import React from 'react';
import Sync from './Sync';
import WhatAreYourGoal from './WhatAreYourGoal';
import WhatIsYourBirthday from './WhatIsYourBirthday';
import WhatIsYourgender from './WhatIsYourGender';
import WhatIsYourHeight from './WhatIsYourHeight';
import WhatIsYourWeight from './WhatIsYourWeight';

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
        case 4:
            return <WhatIsYourWeight navigation={navigation} route={route} onAction={() => setQuestionId(5)} />
        case 5:
            return <WhatAreYourGoal navigation={navigation} route={route} onAction={() => setQuestionId(6)} />
        case 6:
            return <Sync navigation={navigation} route={route} onAction={() => { navigation.reset({
                index: 0,
                routes: [{ name: 'BottomTabNavigation' }],
              });
        }} />
        
    }

}


export default Question;