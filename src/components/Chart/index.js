import React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import DashedLine from 'react-native-dashed-line';
import { Color } from '../../color';


const WIDTH = Dimensions.get('window').width;

const Chart = ({
    containerStyle,
    maxValue = 120,
    minValue = 1,
    height = 200,
    gutter = 5,
    columnWidth = 20,
    data = [
        { value: 100, label: 'Mon' },
        { value: 0, label: 'Tues' },
        { value: 50, label: 'Sar' }
    ],
    ...props
}) => {

    const getMaxItemKey = (data) => {
        let max = 0;
        let key = '';
        Object.keys(data).map(k => {
            if (data[k].value > max) {
                max = data[k].value;
                key = k;
            }
        })
        return key
    }

    return <View style={{ width: "100%", height: height, ...containerStyle }}>
        <View style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>
            <Text style={{ position: "absolute", bottom: data[getMaxItemKey(data)].value / maxValue * height, width: WIDTH, color: Color.Main1, paddingHorizontal: 20, paddingVertical: 5, }}>{data[getMaxItemKey(data)].value}</Text>
            <View style={{
                position: "absolute", bottom: data[getMaxItemKey(data)].value / maxValue * height, width: WIDTH, height: 1, 
                borderRadius: 20,
            }}>
                 <DashedLine dashColor={Color.White2} dashLength={5} />
            </View>
            
            {data.map((item, index) => {
                return <View style={{ marginHorizontal: gutter, height: `${item.value / maxValue * 100}%`, minHeight: columnWidth, width: columnWidth, justifyContent: "center", alignItems: "center" }} key={index}>
                    <View style={{ position: "absolute", height: '100%', borderRadius: 20, width: columnWidth, backgroundColor: item.value > minValue ? Color.Main1 : Color.White2 }}>
                    </View>
                    {!!item?.label && <Text numberOfLines={1} style={{ position: 'absolute', fontSize: 12, flex: 1, bottom: -20, color: Color.White1, width: 100, textAlign: "center", }}>{item.label}</Text>}
                </View>
            })}
        </View>
    </View>
}


export default Chart;