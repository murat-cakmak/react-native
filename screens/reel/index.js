import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import {ReelFilled, Heart, Comment, Message, Logo} from "../../icons";

function Reel() {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                height: '100%',
            }}>
            <Text style={{
                position: 'absolute',
                left: 10,
                top: 10,
                zIndex: 99,
                fontSize: 20,
                fontWeight: 500,
                color: 'white'
            }}>Reel</Text>
            <Image style={{
                width: '100%',
                height: '100%',
            }} source={{
                    uri: 'https://cdn.lorem.space/images/game/.cache/400x900/assasins-creed-odyssey.jpg'
            }} />
            <Text style={{
                position: 'absolute',
                right: 10,
                top: 10,
            }}>
            <ReelFilled fill={'white'} /></Text>
            <View style={{
                position: 'absolute',
                right: 10,
                bottom: 10
            }}>
                <Heart fill="#fff" size={33} style={styles.icon}/>
                <Comment fill="#fff" size={33} style={styles.icon}/>
                <Message fill="#fff" size={33} style={styles.icon}/>
            </View>
            <View style={{
                position: 'absolute',
                lef: 10,
                bottom: 10,
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
                <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://cdn.lorem.space/images/game/.cache/400x400/fortnite.jpg',
                        }}
                    />
                    <Text style={styles.username}>{'Murat Çakmak'}</Text>
            </View>
        </View>
        </View>
    )
}

export default Reel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff',
    },
    icon: {
        margin: 5
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: '100%',
        left: 10,
        bottom: 10,
        marginRight: 15
    },
    username: {
        fontSize: 15,
        fontWeight: 400,
        color: 'white',
    }
})
