/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  if( isLoading ){
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView style={{ marginTop: top + 20, paddingBottom: 30 }}>
      <View>

        {/* Principal */}
        <PosterCarousel
            movies={nowPlaying}     
        />

        {/* Populares */}
        <HorizontalCarousel movies={popular} title='Populares' />

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title='Mejor calificadas' />

        {/* Próximamente */}
        <HorizontalCarousel movies={upcoming} title='Próximamente' />

      </View>
    </ScrollView>
  )

}

export default HomeScreen;