import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Loading, MainLayout, Pokemon } from '@components'
import { http } from '@services'
import { PokemonResultProps } from '@types'
import { useInfiniteQuery } from 'react-query'
import { constant } from '@utils'

const HomeScreen = () => {

    const fetchData = async ({ pageParam = 1 }) => {
        const req = await http.get(`pokedex?page=${pageParam}&perPage=20`);
        return req.data ?? []
    }

    const { data, isLoading, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQuery("pokemon", fetchData, {
        getNextPageParam: (data) => (data.page === data.totalPages) ? undefined : data.page + 1,
    })

    const handleLoadMore = () => hasNextPage ? fetchNextPage() : null

    return (
        <MainLayout isLoading={isLoading}>
            {isSuccess && <FlatList
                data={data?.pages}
                contentContainerStyle={styles.flatlist}
                keyExtractor={(val) => val.page}
                onEndReached={handleLoadMore}
                renderItem={({ item, index }) =>
                    <View key={`wrapper-${index}`} style={styles.wrapper}>
                        {item.data.map((val: PokemonResultProps) =>
                            <Pokemon
                                key={`pokemon-${val.num}`}
                                {...val}
                            />)}
                    </View>
                }
            />}
        </MainLayout>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    flatlist: {
        paddingHorizontal: constant.container,
        paddingVertical: 20
    }
})