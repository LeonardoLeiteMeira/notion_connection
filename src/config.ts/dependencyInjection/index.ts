import { dependencyContainer } from './inversify.config'
import { TYPES } from './types';

const DependencyManager = {
    container: dependencyContainer,
    types:TYPES
}

export default DependencyManager ;