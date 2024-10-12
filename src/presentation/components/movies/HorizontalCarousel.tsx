/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
}

export const HorizontalCarousel = ( { movies, title }: Props ) => {

    const onScroll = ( event: NativeSyntheticEvent<NativeScrollEvent> ) => {

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600 ) >= contentSize.width;
        
        if( !isEndReached ) return;



    };

    return (
        <View
            style={{ height: title ? 260 : 220 }}
        >

            {
                title && (
                    <Text 
                        style={{
                            fontSize: 30,
                            fontWeight: '300',
                            marginLeft: 10,
                            marginBottom: 10
                        }}
                    >
                        { title }
                    </Text>
                )
            }

            <FlatList 
                data={movies}
                renderItem={ ( { item } ) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal
                showsHorizontalScrollIndicator={ false }
                onScroll={ onScroll }
            />
            
        </View>
    );

};
