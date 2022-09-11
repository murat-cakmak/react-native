import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import {ReelFilled} from "../../icons";

function Search() {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <Text>
                <input style={{
                    width: '90%',
                    padding: 10,
                    margin: 20,
                }} type="search" placeholder="Ara" />
            </Text>
            <View style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 10
            }}>
                <View style={{
                        width: '45%',
                        height: screenWidth / 2,
                        marginBottom: 10
                    }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                    }} source={{
                            uri: 'https://cdn.lorem.space/images/game/.cache/300x400/rdr2.jpg'
                    }} />
                    <Text style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                    }}><ReelFilled fill={'white'} /></Text>
                </View>

                <View style={{
                        width: '45%',
                        height: screenWidth / 2,
                        marginBottom: 10
                    }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                    }} source={{
                            uri: 'https://cdn.lorem.space/images/game/.cache/400x400/cod-wii.jpeg'
                    }} />
                    <Text style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                    }}><ReelFilled fill={'white'} /></Text>
                </View>

                <View style={{
                        width: '45%',
                        height: screenWidth / 2,
                        marginBottom: 10
                    }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                    }} source={{
                            uri: 'https://cdn.lorem.space/images/game/.cache/300x400/assasins-creed-valhalla-min.jpg'
                    }} />
                    <Text style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                    }}><ReelFilled fill={'white'} /></Text>
                </View>

                <View style={{
                        width: '45%',
                        height: screenWidth / 2,
                        marginBottom: 10
                    }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                    }} source={{
                            uri: 'https://cdn.lorem.space/images/game/.cache/300x400/star-wars-jedi-fallen-order.jpg'
                    }} />
                    <Text style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                    }}><ReelFilled fill={'white'} /></Text>
                </View>

                <View style={{
                        width: '45%',
                        height: screenWidth / 2,
                        marginBottom: 10
                    }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                    }} source={{
                            uri: 'https://cdn.lorem.space/images/game/.cache/300x400/control.jpg'
                    }} />
                    <Text style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                    }}><ReelFilled fill={'white'} /></Text>
                </View>

                <View style={{
                        width: '45%',
                        height: screenWidth / 2,
                        marginBottom: 10
                    }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                    }} source={{
                            uri: 'https://cdn.lorem.space/images/game/.cache/300x400/uncharted-4.jpeg'
                    }} />
                    <Text style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                    }}><ReelFilled fill={'white'} /></Text>
                </View>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',   
        backgroundColor: '#fff',
    }
})
