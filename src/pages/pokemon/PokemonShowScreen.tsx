import { ScrollView, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Badge, Evolution, Information, PokemonDetailLayout, Section, Statistic } from '@components'
import { color, constant, helper, theme } from '@utils'
import { Text } from '@ui-kitten/components'
import { http } from '@services'
import { useQuery } from 'react-query'
import { PageProps } from '@types'

export const fetchPokemonDetail = async (name: string) => {
    const req = await http.get(`pokedex/${name}`)
    return req.data
}
const PokemonShowScreen: FC<PageProps<'PokemonShow'>> = ({ route }) => {
    const { data, isSuccess, isLoading } = useQuery(['detail', route.params.name],
        () => fetchPokemonDetail(route.params.name));
    const detail = data?.variations[0]

    return (
        <PokemonDetailLayout
            pokemonNumber={data?.num}
            color={helper.getPokemmonColor(detail?.types[0])}
            isLoading={isLoading}>
            {isSuccess &&
                <View>
                    <Text style={styles.title} category="h4">{data.name}</Text>
                    <View style={styles.type}>
                        {detail?.types.map((type: string, key: number) =>
                            <Badge
                                key={`badge-${key}`}
                                style={(key !== 0) && styles.gap}
                                title={type}
                                color={helper.getPokemmonColor(type.toLocaleLowerCase())}
                            />)}
                    </View>
                    <Section title='Information' style={styles.section}>
                        <Text style={styles.paragraph}>{detail?.description}</Text>
                        <View style={styles.information}>
                            <Information title='Weight' value={`${detail?.weight} KG`} />
                            <Information title='Height' value={`${detail?.height} M`} />
                            <Information title='Abilities' value={`${detail?.abilities.toString().replace(",", ", ")}`} />
                            <Information title='Specie' value={`${detail?.specie}`} />
                        </View>
                    </Section>
                    <Section title='Statistic Basic' style={styles.section}>
                        <Statistic
                            colorTheme={helper.getPokemmonColor(detail?.types[0])}
                            title={"HP"}
                            value={detail?.stats["hp"]}
                        />
                        <Statistic
                            colorTheme={helper.getPokemmonColor(detail?.types[0])}
                            title={"Attack"}
                            value={detail?.stats["attack"]}
                        />
                        <Statistic
                            colorTheme={helper.getPokemmonColor(detail?.types[0])}
                            title={"Defense"}
                            value={detail?.stats["defense"]}
                        />
                        <Statistic
                            colorTheme={helper.getPokemmonColor(detail?.types[0])}
                            title={"Speed"}
                            value={detail?.stats["speed"]}
                        />
                        <Statistic
                            colorTheme={helper.getPokemmonColor(detail?.types[0])}
                            title={"Attack Speed"}
                            value={detail?.stats["speedAttack"]}
                        />
                        <Statistic
                            colorTheme={helper.getPokemmonColor(detail?.types[0])}
                            title={"Defense Speed "}
                            value={detail?.stats["speedDefense"]}
                        />

                    </Section>
                    <Section title='Evolutions'>
                        <ScrollView
                            horizontal
                            contentContainerStyle={styles.section}
                            showsHorizontalScrollIndicator={false}>
                            {detail?.evolutions.map((evolution: string, key: number) =>
                                <Evolution
                                    key={`evolution-${key}`}
                                    name={evolution}
                                    colortTheme={helper.getPokemmonColor(detail?.types[0])}
                                    isLast={detail?.evolutions.length === key + 1}
                                />)}
                        </ScrollView>
                    </Section>
                </View>}
        </PokemonDetailLayout>
    )
}

export default PokemonShowScreen

const styles = StyleSheet.create({
    type: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: constant.container
    },
    gap: {
        marginLeft: 10
    },
    title: {
        ...theme.textCenter,
        ...theme.fontMedium,
        marginBottom: 10
    },
    paragraph: {
        lineHeight: 23
    },
    information: {
        marginTop: 16
    },
    section: {
        paddingHorizontal: 15
    }
})