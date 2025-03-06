import { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Image, FlatList, useWindowDimensions, Animated } from 'react-native';
import { Link, router } from 'expo-router';


import slides from '../components/slideDetails';

export default function OpeningScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { width } = useWindowDimensions();

    const scrollX = useRef(new Animated.Value(0)).current;
    
    const slidesRef = useRef(null);

    const loopedSlides = [...slides, slides[0]];

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = currentIndex + 1;

            // If it's the last (fake) slide, reset without animation
            if (nextIndex === loopedSlides.length) {
                slidesRef.current.scrollToOffset({ offset: 0, animated: false });
                setCurrentIndex(0);
                return;
            }

            // Smooth scrolling
            Animated.timing(scrollX, {
                toValue: nextIndex * width,
                duration: 1200,  // Slow transition
                useNativeDriver: false,
            }).start();

            slidesRef.current.scrollToOffset({ offset: nextIndex * width, animated: true });
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const renderItem = ({ item }) => (
        <View style={[styles.container]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'cover' }]} />

            <View style={[styles.textContainer,{width}]}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textDescription}>{item.description}</Text>
            </View>
        </View>
    );

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold:50}).current;

    return (
        <View style={[styles.mainContainer]}>
            <FlatList
                data={slides}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset : {x:scrollX} }}],{
                    useNativeDriver:false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
             <View style={styles.dotContainer}>
                {slides.map((_, index) => {
                    const opacity = scrollX.interpolate({
                        inputRange: [
                            width * (index - 1),
                            width * index,
                            width * (index + 1),
                        ],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp",
                    });
                    return <Animated.View key={index} style={[styles.dot, { opacity }]} />;
                })}
            </View>
            <View style={styles.buttonContainer}>
                <Link href="/signin" >
                    <Pressable style={styles.button} onPress={()=> router.push('/signin')} >
                        <Text style={[styles.buttonText, styles.buttonText1]}>Sign In</Text>
                    </Pressable>
                </Link>
                <Link href="/signup" >
                    <Pressable style={styles.button} onPress={()=>router.push('./signup')} >
                        <Text style={[styles.buttonText, styles.buttonText2]}>Sign Up</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        marginTop:'25%',
    },
    image: {
        width: 'auto',
        height: 350,
        marginBottom:'5%',
        
    },
    dotContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom:'28%',
        alignSelf: "center",
    },
    dot: {
        height: 8,
        width: 8,
        backgroundColor: "gray",
        marginHorizontal: 5,
        borderRadius: 4,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',   
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        justifyContent:'center',
        textAlign:'center',
    },
    textDescription: {
        fontSize: 15,
        paddingHorizontal: '10%',
        textAlign: 'center',
        fontStyle:'italic',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        marginHorizontal: 'auto',
        position: 'absolute',
        bottom: '5%',
        left: 30,
        right: 30,
    },
    buttonText: {
        paddingHorizontal: 35,
        padding: 15,
        fontSize: 18,
        borderRadius: 5,
    },
    buttonText1: {
        borderWidth: 1,
        borderColor: 'rgb(255, 107, 107)',
        color: 'rgb(255, 107, 107)',
    },
    buttonText2: {
        backgroundColor: 'rgb(255, 107, 107)',
        color: 'white',
    }
});