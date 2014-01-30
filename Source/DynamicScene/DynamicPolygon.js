/*global define*/
define(['../Core/defaultValue',
        '../Core/defined',
        '../Core/defineProperties',
        '../Core/DeveloperError',
        '../Core/Event',
        './createDynamicPropertyDescriptor'
    ], function(
        defaultValue,
        defined,
        defineProperties,
        DeveloperError,
        Event,
        createDynamicPropertyDescriptor) {
    "use strict";

    /**
     * An optionally time-dynamic polygon.
     *
     * @alias DynamicPolygon
     * @constructor
     */
    var DynamicPolygon = function() {
        this._show = undefined;
        this._material = undefined;
        this._height = undefined;
        this._extrudedHeight = undefined;
        this._granularity = undefined;
        this._stRotation = undefined;
        this._propertyChanged = new Event();
    };

    defineProperties(DynamicPolygon.prototype, {
        /**
         * Gets the event that is raised whenever a new property is assigned.
         * @memberof DynamicPolygon.prototype
         * @type {Event}
         */
        propertyChanged : {
            get : function() {
                return this._propertyChanged;
            }
        },

        /**
         * Gets or sets the boolean {@link Property} specifying the polygon's visibility.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        show : createDynamicPropertyDescriptor('show', '_show'),

        /**
         * Gets or sets the {@link MaterialProperty} specifying the appearance of the polygon.
         * @memberof DynamicPolygon.prototype
         * @type {MaterialProperty}
         */
        material : createDynamicPropertyDescriptor('material', '_material'),

        /**
         * Gets or sets the Number {@link Property} specifying the height of the polygon.
         * If undefined, the polygon will be on the surface.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        height : createDynamicPropertyDescriptor('height', '_height'),

        /**
         * Gets or sets the Number {@link Property} specifying the extruded height of the polygon.
         * Setting this property creates a polygon shaped volume starting at height and ending
         * at the extruded height.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        extrudedHeight : createDynamicPropertyDescriptor('extrudedHeight', '_extrudedHeight'),

        /**
         * Gets or sets the Number {@link Property} specifying the sampling distance, in radians,
         * between each latitude and longitude point.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        granularity : createDynamicPropertyDescriptor('granularity', '_granularity'),

        /**
         * Gets or sets the Number {@link Property} specifying the rotation of the texture coordinates,
         * in radians. A positive rotation is counter-clockwise.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        stRotation : createDynamicPropertyDescriptor('stRotation', '_stRotation'),

        /**
         * Gets or sets the Boolean {@link Property} specifying whether the polygon should be filled.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        fill : createDynamicPropertyDescriptor('fill', '_fill'),

        /**
         * Gets or sets the Boolean {@link Property} specifying whether the polygon should be outlined.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        outline : createDynamicPropertyDescriptor('outline', '_outline'),

        /**
         * Gets or sets the Color {@link Property} specifying whether the color of the outline.
         * @memberof DynamicPolygon.prototype
         * @type {Property}
         */
        outlineColor : createDynamicPropertyDescriptor('outlineColor', '_outlineColor')
    });

    /**
     * Duplicates a DynamicPolygon instance.
     * @memberof DynamicPolygon
     *
     * @param {DynamicPolygon} [result] The object onto which to store the result.
     * @returns {DynamicPolygon} The modified result parameter or a new instance if one was not provided.
     */
    DynamicPolygon.prototype.clone = function(result) {
        if (!defined(result)) {
            result = new DynamicPolygon();
        }
        result.show = this.show;
        result.material = this.material;
        result.height = this.height;
        result.extrudedHeight = this.extrudedHeight;
        result.granularity = this.granularity;
        result.stRotation = this.stRotation;
        result.fill = this.fill;
        result.outline = this.outline;
        result.outlineColor = this.outlineColor;
        return result;
    };

    /**
     * Assigns each unassigned property on this object to the value
     * of the same property on the provided source object.
     * @memberof DynamicPolygon
     *
     * @param {DynamicPolygon} source The object to be merged into this object.
     * @exception {DeveloperError} source is required.
     */
    DynamicPolygon.prototype.merge = function(source) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(source)) {
            throw new DeveloperError('source is required.');
        }
        //>>includeEnd('debug');

        this.show = defaultValue(this.show, source.show);
        this.material = defaultValue(this.material, source.material);
        this.height = defaultValue(this.height, source.height);
        this.extrudedHeight = defaultValue(this.extrudedHeight, source.extrudedHeight);
        this.granularity = defaultValue(this.granularity, source.granularity);
        this.stRotation = defaultValue(this.stRotation, source.stRotation);
        this.fill = defaultValue(this.fill, source.fill);
        this.outline = defaultValue(this.outline, source.outline);
        this.outlineColor = defaultValue(this.outlineColor, source.outlineColor);
    };

    return DynamicPolygon;
});
