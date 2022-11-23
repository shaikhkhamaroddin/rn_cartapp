import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import ListItemComponent from './ListItemComponent';

function FlatlistComponent(props) {
    const {data,buttonText,onPress,keyExtractor,passIndex}= props;
    return data != null &&
        <View>
            <FlatList
                data={data}
                extraData={data}
                renderItem={({item,index})=>
                    <ListItemComponent
                        buttonText={buttonText}
                        onPress={onPress}
                        item={item}
                        index={index}
                        passIndex={passIndex}
                    />
                }
                keyExtractor={keyExtractor}
            />
        </View>
}

export default React.memo(FlatlistComponent);