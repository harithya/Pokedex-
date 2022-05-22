import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FooterLoading, Loading, MainLayout, Pokemon } from '@components'
import { http } from '@services'
import { PokemonResultProps, SearchStateProps } from '@types'
import { useInfiniteQuery } from 'react-query'
import { constant } from '@utils'
import { useSelector } from 'react-redux'
import { State } from 'src/redux/reducer'

const HomeScreen = () => {

    const searchState: SearchStateProps = useSelector((state: State) => state.search);
    const fetchData = async ({ pageParam = 1 }) => {
        const url = (searchState.data.length > 0) ?
            `search?query=${searchState.data}&page=${pageParam}&perPage=20` : `pokedex?page=${pageParam}&perPage=20`
        const req = await http.get(url);
        return req.data ?? []
    }

    const { data, isLoading, isSuccess, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(["pokemon", searchState.data],
        fetchData, {
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
                ListFooterComponent={() => isFetching ? <FooterLoading /> : null}
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
        paddingTop: 20,
        paddingBottom: 40
    }
})