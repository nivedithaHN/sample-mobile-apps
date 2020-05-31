import React, {Component} from 'react';
import {
    View,
    Platform,
    FlatList,
    Image,
} from 'react-native';
import {styles} from './Styles';

export default class ViewPhotos extends Component {
    constructor(props) {
        super();
        this.state = {
            imageList: [],
        };
    }

    componentDidMount() {
        this.extractRequiredImageData();
    }

    extractRequiredImageData = () => {
        let imageData = this.props.navigation.state.params;
        let imageList = [];

        for (let i = 0; i < Object.keys(imageData).length; i++) {
            let data = imageData[String(i)];
            let image = {
                id: String(i),
                contentType: data.mime,
                fileSize: data.size,
                filePath: data.path,
            };

            if (Platform.OS === 'ios') {
                image.fileName = data.filename;
            } else {
                let path = data.path.split('/');
                image.fileName = path[path.length - 1];
            }

            imageList.push(image);
        }
        this.setState({
            imageList,
        });
    };

    render() {
        return (
            <View style={styles.imageViewerContainer}>
                <View style={styles.imageContainer}>
                    <FlatList
                        data={this.state.imageList}
                        numColumns={2}
                        renderItem={({item}) => (
                            <Image style={styles.image} source={{uri: item.filePath}} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}
