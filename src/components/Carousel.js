import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'


const { width, heigth } = Dimensions.get('window')
let flatList

function infiniteScroll(dataList, mySlide) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function () {
        scrolled++
        if (scrolled < numberOfData)
            scrollValue = scrollValue + width
        else {
            scrollValue = 0
            scrolled = 0
        }
        if (mySlide.current) {
            mySlide.current.scrollToOffset({
                animated: true,
                offset: scrollValue,
            });
        }

        // this.flatList.scrollToOffset({ animated: true, offset: scrollValue })

    }, 8000)
}


const Carousel = ({ data, navigation, id }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)
    const mySlide = useRef()

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList, mySlide)
    })


    if (data && data.length) {
        return (
            <View>
                <FlatList
                    data={data}
                    ref={mySlide}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem navigation={navigation} id={id} item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false }
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={[{ opacity }, styles.bullet]}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    bullet: {
        height: 10,
        width: 10,
        backgroundColor: 'orange',
        margin: 2,
        marginRight: 4,
        borderRadius: 5
    }
})

export default Carousel